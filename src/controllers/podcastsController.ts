import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/listEpisodesService'
import { serviceFilterEpisodes } from '../services/filterEpisodesService';
import { ContentType } from '../utils/contentType';
import { FilterPodcastModel } from '../models/filterPodcastModel';

const defaultContent = { 'Content-Type':ContentType.JSON }

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content = await serviceListEpisodes();

    response.writeHead(content.statusCode, defaultContent);
    response.end(
        JSON.stringify(content.body)
    );
}

export const getFilterEpisodes = async (
    request: IncomingMessage,
    response: ServerResponse
) => {

    const content: FilterPodcastModel = await serviceFilterEpisodes(request.url);

    response.writeHead(content.statusCode, defaultContent);
    response.write(JSON.stringify(content.body))
    
    response.end()
}