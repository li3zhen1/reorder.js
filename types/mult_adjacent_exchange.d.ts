import { Graph, NodeLike, LinkLike } from "./_graph";
/**
 * Optimize two layers by swapping adjacent nodes when
 * it reduces the number of crossings.
 * @param {Graph} graphs - the graph these two layers belong to
 * @param {list} layer1 - the ordered list of nodes in layer 1
 * @param {list} layer2 - the ordered list of nodes in layer 2
 * @returns {list} a tuple containing the new layer1, layer2, and crossings count
 */
export declare function mult_adjacent_exchange<N extends NodeLike, L extends LinkLike<N>>(graphs: Graph<N, L>[], layer1: number[], layer2: number[]): (number | number[])[];
