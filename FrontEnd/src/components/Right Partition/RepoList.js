import { RepoSkeleton } from './RepoSkeleton';
export const RepoList = ({ repoData, setIsLoading }) => {
  return (
    <div className="repo-container">
      {repoData !== undefined &&
        repoData.map((repo, id) => (
          <RepoSkeleton key={id} repo={repo} repoId={id} />
        ))}
    </div>
  );
};
