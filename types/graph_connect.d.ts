import { Graph, LinkLike, NodeLike } from './_graph';
export declare function graph_connect<N extends NodeLike, L extends LinkLike<N>>(graph: Graph<N, L>, comps: number[][]): Graph<N, L>;
