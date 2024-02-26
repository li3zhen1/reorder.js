import { NodeLike, LinkLike, Graph } from "./_graph";
export declare function graph2mat<N extends NodeLike, L extends LinkLike<N>>(graph: Graph<N, L>, directed: boolean): number[][];
