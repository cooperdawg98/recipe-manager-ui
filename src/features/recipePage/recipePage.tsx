const recipePage = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center px-4">
      <div id="header" className="flex flex-col w-full gap-4">
        <h1 id="title">Penne With Hot-as-You-Dare Arrabbiata Sauce Recipe</h1>
        <p>
          This simple pasta dish is made with a sauce that's spicy enough to
          earn its "angry" moniker.
        </p>
        <div id="presenter block" className="flex flex-row gap-1">
          <span>Presented By</span>
          <span className="text-verdigris-500 hover:text-verdigris-600 underline hover:decoration-2">
            Landon Baker
          </span>
        </div>
        <div id="header image">
          <img
            width="1500"
            height="1125"
            src="https://www.seriouseats.com/thmb/PDh2rLFXAiYSNg9XclL406vf9M8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__03__20160211-pasta-arrabiata-vicky-wasik-011-c6de80337920468886b7d6a8c0323544.jpg"
            alt="Overhead view of a black bowl of penne with arrabiata sauce."
          />
        </div>
      </div>
    </div>
  );
};

export default recipePage;
