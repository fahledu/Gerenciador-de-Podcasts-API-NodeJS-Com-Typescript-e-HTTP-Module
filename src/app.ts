import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcastsController"
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/httpMetjods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

        const baseUrl = request.url?.split("?")[0]

        if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
            await getListEpisodes(request, response);
        }

        if (request.method === HttpMethod.GET && baseUrl === Routes.EPSODE) {
            await getFilterEpisodes(request, response);
        }
    };