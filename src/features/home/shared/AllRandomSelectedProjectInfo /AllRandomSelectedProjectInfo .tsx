type OurWorkData = {
  image: string;
  text: string;
  subText?: string;
  popUpHeadding: string;
  popHeadText: string;
  popImageUrl: string;
  capabilities: string[];
  duration: string;
  team: string[];
  location: string;
  industry: string[];
  endText: string;
};
type DesignType = {
  moblieDesign: OurWorkData[];
  websiteDesign: OurWorkData[];
  branding: OurWorkData[];
};
export function AllRandomSelectedProjectInfo(
  listOfProjects: DesignType,
  setAllProjectAtRandomPick: React.Dispatch<
    React.SetStateAction<OurWorkData[][] | undefined>
  >,
) {
  const moblieDesign = listOfProjects.moblieDesign;
  const websiteDesign = listOfProjects.websiteDesign;
  const branding = listOfProjects.branding;
  if (
    moblieDesign.length === 0 ||
    websiteDesign.length === 0 ||
    branding.length === 0
  )
    return;
  const allProjects: OurWorkData[][] = [];
  let guessedList: number[] = []; // guessedList could only be guessed at 3 counts 0, 1, 2, as 0 = moblieDesign, 1 = websiteDesign, 2 = branding
  const indexPickedInMoblieDesign: number[] = [];
  const indexPickedInWebSiteDesign: number[] = [];
  const indexPickedInBranding: number[] = [];
  while (allProjects.length < 3) {
    // while allProjects is not index on 3 counts loop
    let count = 0; // full (3) index count that makes on allProjects index; 3 count = 1 allProjects index
    let guessNumber; // guessNumber // guess number range between 0 - 2 as 0 stands for moblie design 1 for website design 2 for branding
    const filteringList: OurWorkData[] = []; // list of getted values to make one full allProjects index list length can be below 6 to make one full index
    function getFullList() {
      do {
        //guess a random number between 0 - 2
        const firstGuess = Math.floor(Math.random() * 3); // guess a number to use that number would be used to pick a catigory to loop and get data from
        guessNumber = firstGuess;
      } while (guessedList.includes(guessNumber)); // compare guessed number to guessed list since guessed list can only be 0, 1, 2, we guess in the range that hassent been guessed
      guessedList.push(guessNumber); // push new guessed number that hasn't been guessed
      //
      function getRandeomIndex(
        counter: number,
        sltIndex: number | undefined,
        list: OurWorkData[],
        sltIndexInList: number[],
        firstSubList: OurWorkData[],
        secondSubList: OurWorkData[],
      ): void {
        const index = Math.floor(Math.random() * list.length); // guess a random index between 0 - data in list length
        if (
          sltIndexInList.includes(index) &&
          sltIndexInList.length !== list.length // check if that data at guessed index hasent been added to list and if all index in list havent been gussed if conditions are meat don't guees a new number continue to flow
        )
          return getRandeomIndex(
            counter,
            sltIndex,
            list,
            sltIndexInList,
            firstSubList,
            secondSubList,
          );
        counter += 1;
        if (sltIndexInList.length !== list.length) {
          // if all index hassent been guss push the item at the current index
          sltIndex = index;
          sltIndexInList.push(index);
          const item = list[index];
          filteringList.push(item);
        } else {
          // else push random data betwwen othere list caltigory to meat list length
          // fall back if all slttindexinlist was selected and no more index left
          if (counter === 1) {
            const firstPick =
              firstSubList[Math.floor(Math.random() * firstSubList.length)];
            filteringList.push(firstPick);
          } else {
            const secondPick =
              secondSubList[Math.floor(Math.random() * secondSubList.length)];
            filteringList.push(secondPick);
          }
        }
        if (counter !== 2) {
          // since am only getting 2 data data at i time check if i have gotten random data twice  as i pushed before i check so first push data -> counter = 1; check ondition;  second push data -> counter = 2; check condition;
          getRandeomIndex(
            counter,
            sltIndex,
            list,
            sltIndexInList,
            firstSubList,
            secondSubList,
          );
        }
      }
      if (guessNumber === 0 && moblieDesign.length !== 0) {
        // if guess number is 0 which 0 = moblie desgin; get values from moblie design
        // moblieDesign
        let selectedIndex: number | undefined; // selected index which is used as a closure selected index keeps recored of number guessed in moble design to pick value as to avoid deplicated value in one full allProjects index (1)
        let count = 0; // count which at as a breaker to exit the closure loop which is range 0 -1
        getRandeomIndex(
          count,
          selectedIndex,
          moblieDesign,
          indexPickedInMoblieDesign,
          websiteDesign,
          branding,
        );
      } else if (guessNumber === 1 && websiteDesign.length !== 0) {
        // websiteDesign
        let selectedIndex: number | undefined; // selected index which is used as a closure selected index keeps recored of number guessed in website design to pick value as to avoid deplicated value in one full allProjects index (1)
        let count = 0; // count which at as a breaker to exit the closure loop which is range 0 -1
        getRandeomIndex(
          count,
          selectedIndex,
          websiteDesign,
          indexPickedInWebSiteDesign,
          moblieDesign,
          branding,
        );
      } else if (guessNumber === 2 && branding.length !== 0) {
        // branding
        let selectedIndex: number | undefined; // selected index which is used as a closure selected index keeps recored of number guessed in branding to pick value as to avoid deplicated value in one full allProjects index (1)
        let count = 0; // count which at as a breaker to exit the closure loop which is range 0 -1
        getRandeomIndex(
          count,
          selectedIndex,
          branding,
          indexPickedInBranding,
          moblieDesign,
          websiteDesign,
        );
      }
      count += 1;
    }
    while (count < 3) {
      getFullList();
    }
    ((guessedList = []), allProjects.push(filteringList));
  }
  setAllProjectAtRandomPick(allProjects);
}
