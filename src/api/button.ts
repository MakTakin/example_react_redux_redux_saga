import api from "./config";
import type { FakeData } from "interfaces";

export const getFakeData = (): Promise<FakeData> => api.get(`/todos/1`);

export const updateFakeData = (value: boolean): Promise<FakeData> =>
  api.put(`/todos/1`, { completed: value });
