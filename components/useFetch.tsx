import { useEffect, useState } from "react";

type Props = {
	type?: string;
	uri: string;
	dispatch?: any;
	dispatchType?: any;
};

type Return = {
	data: any[];
	error: any[];
	isLoading: boolean;
};

const controller: AbortController = new AbortController();

const useFetch = (props: Props): Return => {
	const [data, setData] = useState<any>([]);
	const [error, setError] = useState<any>([false, "No Error"]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const { type, uri, dispatch, dispatchType }: Props = props;

	const callData = async (): Promise<void> => {
		try {
			const request: any = await fetch(uri, { signal: controller.signal });
			if (!request.ok) {
				const errorMessage = await request.text();
				setError([true, `Error ${request.status}: ${errorMessage}`]);
			}
			const response: any = await request.json();

			if (type) setData([{ title: "All" }, ...response.result]);
			else setData(response.result);

			if (dispatch) dispatch({ type: dispatchType, payload: response.result });
			setIsLoading(false);
		} catch (error: any) {
			setError([true, error.message]);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		callData();
		return () => controller.abort();
	}, []);

	return { data, error, isLoading };
};

export default useFetch;
