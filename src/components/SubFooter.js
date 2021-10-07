import React from 'react';

const SubFooter = () => {
  return (
    <div className="w-full h-full p-20 bg-yellow-lightYellow">
      <footer className="pt-1 border-t border-white bg-yellow-lightYellow">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center mt-6 ">
            <div className="pt-10 text-center sm:w-2/3">
              <p className="mb-2 text-sm text-black">
                © 2021 by Da Nei Wei Wei
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SubFooter;
