import { EdgeNetwork, ComputeNode, ResourceManager } from '@ntwrks/core'

class EdgeController {
  private network: EdgeNetwork
  private resources: ResourceManager

  constructor() {
    this.network = new EdgeNetwork({
      maxPoints: 80,
      computeUnits: 1000,
      powerEfficiency: 'adaptive'
    })

    this.resources = new ResourceManager({
      allocation: 'dynamic',
      priority: 'latency'
    })
  }

  async deployCompute(task: ComputeTask) {
    const node = await this.resources.findOptimalNode()
    return node.process(task)
  }

  monitorLoad() {
    return this.network.nodes.map(node => ({
      id: node.id,
      load: node.currentLoad,
      capacity: node.maxCapacity
    }))
  }
}

export default new EdgeController()
