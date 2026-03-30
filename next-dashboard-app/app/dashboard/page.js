export default async function DashboardPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // delay

  return <h2>Dashboard Home</h2>;
}