export default function Community({ community }) {
  return (
    <div>
      <h3 style={{ marginBottom: "-0.5em" }}>{community.name}</h3>

      <p>{community.description}</p>

      <div style={{ marginTop: "0.5em" }}>
        {community.web ? <a href={community.web}>Website</a> : null}
        {community.discord ? (
          <a style={{ marginLeft: "0.7em" }} href={community.discord}>
            Discord
          </a>
        ) : null}
      </div>
    </div>
  );
}
