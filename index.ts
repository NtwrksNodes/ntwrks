import EdgeComputing from './edge-computing';
import NetworkMesh from './network-mesh';
import QuantumFlow from './quantum-flow';
import SignalCore from './signal-core';
import NetworkCoordinator from './network-coordinator';

// Export all components
export {
    EdgeComputing,
    NetworkMesh,
    QuantumFlow,
    SignalCore,
    NetworkCoordinator
};

// Export default coordinator for simplified usage
export default NetworkCoordinator;

// Export types
export interface NetworkConfig {
    nodes?: number;
    range?: number;
    type?: 'MESH' | 'EDGE' | 'QUANTUM' | 'SIGNAL';
}

export interface NetworkMetrics {
    edgePoints: number;
    meshNodes: number;
    quantumBits: number;
    signalChannels: number;
    systemLoad: number;
    efficiency: number;
    uptime: number;
}

// Convenience function to create a new network
export function createNetwork(config: NetworkConfig = {}): NetworkCoordinator {
    const coordinator = new NetworkCoordinator();
    
    // Initialize with provided configuration
    coordinator.initializeNetwork()
        .catch(error => {
            console.error('Failed to initialize network:', error);
            throw error;
        });
    
    return coordinator;
}

// Export version information
export const VERSION = '1.0.0';

// Export constants
export const NetworkTypes = {
    MESH: 'MESH',
    EDGE: 'EDGE',
    QUANTUM: 'QUANTUM',
    SIGNAL: 'SIGNAL'
} as const;

export const DefaultConfig = {
    nodes: 50,
    range: 100,
    type: NetworkTypes.MESH
} as const;

// Export utility functions
export function isNetworkOperational(coordinator: NetworkCoordinator): boolean {
    const status = coordinator.getNetworkStatus();
    return status.systemLoad < 90 && status.efficiency > 90;
}

export function getNetworkEfficiency(coordinator: NetworkCoordinator): number {
    const status = coordinator.getNetworkStatus();
    return status.efficiency;
}
