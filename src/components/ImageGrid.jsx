
import _01 from '../assets/images/about/01.jpg';
import _02 from '../assets/images/about/02.jpg';
import _03 from '../assets/images/about/03.jpg';
import _04 from '../assets/images/about/04.jpg';
import _05 from '../assets/images/about/05.jpg';
import _06 from '../assets/images/about/06.jpg';










const ImageGrid = () => {
const placeholder = (text) =>
  `${text}`;


  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-row flex-wrap -mx-2">
        <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
          <a
            className="block w-full h-full bg-gray-800 bg-no-repeat bg-center bg-cover"
            href="#"
            title="Link"
            style={{ backgroundImage: `url(${placeholder(_01)})` }}
          >
            {/* overlay text if needed */}
          </a>
        </div>

        <div className="w-full md:w-1/2 mb-4 px-2">
          <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
            <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
              <a
                className="block w-full h-full bg-gray-800 bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
                style={{ backgroundImage: `url(${placeholder(_02)})` }}
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2">
              <a
                className="block w-full h-full bg-gray-800 bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
                style={{ backgroundImage: `url(${placeholder(_03)})` }}
              />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 px-2">
          <a
            className="block w-full h-full bg-gray-800 bg-no-repeat bg-center bg-cover"
            href="#"
            title="Link"
            style={{ backgroundImage: `url(${placeholder(_04)})` }}
          />
        </div>
        <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 px-2">
          <a
            className="block w-full h-full bg-gray-800 bg-no-repeat bg-center bg-cover"
            href="#"
            title="Link"
            style={{ backgroundImage: `url(${placeholder(_05)})` }}
          />
        </div>
        <div className="w-full sm:w-1/3 h-32 md:h-48 px-2">
          <a
            className="block w-full h-full bg-gray-800 bg-no-repeat bg-center bg-cover"
            href="#"
            title="Link"
            style={{ backgroundImage: `url(${placeholder(_06)})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
