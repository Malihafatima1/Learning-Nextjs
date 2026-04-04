import UserList from "./components/UserList";

export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>
        🚀 Smart Dashboard
      </h1>

      <UserList />
    </div>
  );
}