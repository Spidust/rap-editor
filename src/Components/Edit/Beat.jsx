export default function ({ ...props }) {
  const getLink = (link) => {
    return "https://www.youtube.com/embed/" + link.split("/")[3].split("=")[1];
  }
  return (
    <div className="beat">
      <iframe
        width="560"
        height="315"
        src={getLink(props.beat)}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
