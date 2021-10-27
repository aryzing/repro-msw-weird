export const code = async () => {
  const res = await fetch("http://localhost:4444", {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) throw new Error("Something when wrong while fetching.");

  console.log("Response headers:", res.headers);

  return res.json();
};
