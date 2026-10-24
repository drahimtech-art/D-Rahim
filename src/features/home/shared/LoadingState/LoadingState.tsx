import { useState, useEffect, Suspense } from "react";
import { ProjectDataApi } from "../../../../storage/PortfolioProjectApi";
import { GetProjectList } from "../../api/Api";
import LoadingAnimation from "./LoadingAnimation";
function LoadingState({
  Children,
}: {
  Children: React.LazyExoticComponent<() => React.JSX.Element>;
}): React.ReactNode {
  const ourWorkProjecData = ProjectDataApi();
  const { listOfProjects, setListOfProjects, setAllRandomSelectedProjectInfo } =
    ourWorkProjecData;
  const [isDataGoten, setIsDataGoten] = useState<boolean>(false);
  useEffect(() => {
    if (
      listOfProjects.branding.length !== 0 ||
      listOfProjects.moblieDesign.length !== 0 ||
      listOfProjects.websiteDesign.length !== 0
    )
      return setIsDataGoten(true);
    async function getData() {
      try {
        const callGetApi: boolean = await GetProjectList(
          setListOfProjects,
          setAllRandomSelectedProjectInfo,
        );
        setIsDataGoten(callGetApi);
      } catch (error) {
        console.log(`found error in LoadingState component`);
        setIsDataGoten(false);
      }
    }
    getData();
  }, []);
  return isDataGoten ? (
    <Suspense fallback={<LoadingAnimation shouldFadeOut={false} />}>
      <Children />
    </Suspense>
  ) : (
    <LoadingAnimation shouldFadeOut={false} />
  );
}
export default LoadingState;
