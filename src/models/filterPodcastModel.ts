import { PodcastModel } from "./podcastModule";

export interface FilterPodcastModel {
    statusCode: number,
    body: PodcastModel[]
}