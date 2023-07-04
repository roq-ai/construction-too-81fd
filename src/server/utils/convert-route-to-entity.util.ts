const mapping: Record<string, string> = {
  companies: 'company',
  'rental-agreements': 'rental_agreement',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
