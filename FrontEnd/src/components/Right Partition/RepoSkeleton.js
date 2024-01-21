export const RepoSkeleton = ({ repo, repoId }) => {
  return (
    <div className="repo-skeleton">
      <h1 className="color-blue">{repo.name}</h1>
      <p className="color-grey">{repo.description}</p>
      <div className="topics">
        {repo.topics.map((topic, id) => (
          <span className="topic color-blue" key={id}>
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};