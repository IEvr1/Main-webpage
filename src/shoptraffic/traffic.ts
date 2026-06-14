export type TrafficLevel = 'green' | 'yellow' | 'orange' | 'red';

export const TRAFFIC_LEVELS: TrafficLevel[] = ['green', 'yellow', 'orange', 'red'];

export function trafficWaitKey(level: TrafficLevel): string {
  const keys: Record<TrafficLevel, string> = {
    green: 'traffic.waitGreen',
    yellow: 'traffic.waitYellow',
    orange: 'traffic.waitOrange',
    red: 'traffic.waitRed',
  };
  return keys[level];
}

export function trafficLabelKey(level: TrafficLevel): string {
  const keys: Record<TrafficLevel, string> = {
    green: 'traffic.labelGreen',
    yellow: 'traffic.labelYellow',
    orange: 'traffic.labelOrange',
    red: 'traffic.labelRed',
  };
  return keys[level];
}

export function trafficFillClass(level: TrafficLevel): string {
  const map: Record<TrafficLevel, string> = {
    green: 'bg-emerald-500',
    yellow: 'bg-amber-400',
    orange: 'bg-orange-500',
    red: 'bg-red-600',
  };
  return map[level];
}
