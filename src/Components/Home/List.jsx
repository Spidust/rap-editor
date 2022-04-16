import Item from "./Item";
export default function () {
  const song = JSON.parse(localStorage.getItem("songs"));
  return (
    <div
      className="list"
      style={{
        textAlign: "center",
      }}
    >
      {song == null || song.length < 1 ? (
        <a href="/add">
          <h1>Create new here</h1>
        </a>
      ) : (
        song.map((item, index) => {
          return (
            <Item
              key={index}
              name={item.title}
              desc={item.title}
              beat={item.beat}
              id={item.id}
            />
          );
        })
      )}
    </div>
  );
}
