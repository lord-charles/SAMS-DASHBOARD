import { Card, CardBody } from "@nextui-org/card";
import React from "react";

const Page = () => {
  return (
    <Card className="mx-5">
      <CardBody>
        <div className="grid grid-cols-4 gap-4 mb-5">
          <div>
            <p className="block text-sm font-semibold text-gray-700 ">Name</p>
            <p className="block text-sm text-gray-700 ">Bangbang ALP Centre</p>
          </div>
          <div>
            <p className="block text-sm font-semibold text-gray-700 ">State</p>
            <p className="block text-sm text-gray-700 ">Ruweng</p>
          </div>
          <div>
            <p className="block text-sm font-semibold text-gray-700 ">County</p>
            <p className="block text-sm text-gray-700 ">Abiemnon County</p>
          </div>
          <div>
            <p className="block text-sm font-semibold text-gray-700 ">Payam</p>
            <p className="block text-sm text-gray-700 ">Abiemnom</p>
          </div>
          <div>
            <p className="block text-sm font-semibold text-gray-700 ">
              AFI School Code
            </p>
            <p className="block text-sm text-gray-700 ">BCJ</p>
          </div>
          <div>
            <p className="block text-sm font-semibold text-gray-700 ">EMIS #</p>
            <p className="block text-sm text-gray-700 ">0</p>
          </div>
          <div>
            <p className="block text-sm font-semibold text-gray-700 ">
              School Type
            </p>
            <p className="block text-sm text-gray-700 ">ALP</p>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <p className="text-sm mb-2">Cash issued by Head Teacher</p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-8">
                  Name:
                </label>
                <hr className="border-dotted border-t-2 border-gray-500 my-4 w-3/4" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-8">
                  Signature:
                </label>
                <hr className="border-dotted border-t-2 border-gray-500 my-4 w-3/4" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-8">
                  Date:
                </label>
                <hr className="border-dotted border-t-2 border-gray-500 my-4 w-3/4" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-sm mb-2">
              Witnessed by PTA representative of the SMC
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-8">
                  Name:
                </label>
                <hr className="border-dotted border-t-2 border-gray-500 my-4 w-3/4" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-8">
                  Signature:
                </label>
                <hr className="border-dotted border-t-2 border-gray-500 my-4 w-3/4" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-8">
                  Date:
                </label>
                <hr className="border-dotted border-t-2 border-gray-500 my-4 w-3/4" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-sm mb-2">
              Witnessed by Local Leader representative within SMC
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-8">
                  Name:
                </label>
                <hr className="border-dotted border-t-2 border-gray-500 my-4 w-3/4" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-8">
                  Signature:
                </label>
                <hr className="border-dotted border-t-2 border-gray-500 my-4 w-3/4" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-8">
                  Date:
                </label>
                <hr className="border-dotted border-t-2 border-gray-500 my-4 w-3/4" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-sm mb-2">Witnessed by Payam Education officer</p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-8">
                  Name:
                </label>
                <hr className="border-dotted border-t-2 border-gray-500 my-4 w-3/4" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-8">
                  Signature:
                </label>
                <hr className="border-dotted border-t-2 border-gray-500 my-4 w-3/4" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-8">
                  Date:
                </label>
                <hr className="border-dotted border-t-2 border-gray-500 my-4 w-3/4" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm mb-5">
          <p>Instructions</p>
          <br />
          <ul>
            <li>1. The original form is kept by the Head Teacher.</li>
            <li>
              2. Please make 3 copies of the signed form: one copy goes to
              Payam, one copy to County Education Office and one copy to GESS.
            </li>
          </ul>
        </div>
      </CardBody>
    </Card>
  );
};

export default Page;
