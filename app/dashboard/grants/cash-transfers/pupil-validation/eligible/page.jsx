import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import EligibleTable from "./EligibleTable";

const Page = () => {
  return (
    <Card className="mx-5">
      <CardBody>
        <div className="text-sm mb-5">
          <p>
            Instructions: Please review this list in detail to ensure that the
            information stored on SAMS is correct. Use the following codes to
            fill the <b>Relevant Code</b> column:
          </p>
          <br />
          <ul>
            <li>1. Information is Correct.</li>
            <li>2. Remove learner from School.</li>
            <li>
              3. Change learner Form/Year ( Indicate correct Form/Year on{" "}
              <b>Correction Needed</b> column. )
            </li>
            <li>
              4. Edit learner&apos;s personal details, including spelling
              changes (Indicate the correct details on <b>Correction Needed</b>{" "}
              column. )
            </li>
            <li>
              5. Area of difficulty ( Indicate the area of difficulty using{" "}
              <b>
                V-Visual impairment/Seeing, H-Hearing, W-Walking,
                R-Remembering/Concentrating, S-Selfcare, C-Communicating{" "}
              </b>
              (If the child has multiple disabilities add the relevant letters
              with comma between them e.g. H, W, C. ))
            </li>
          </ul>
          <br />
          <p>
            <b>Note:</b> Adding a learner should be done separately on the{" "}
            <b>Add Learner Validation Form. </b>
          </p>
        </div>
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
        <EligibleTable />
      </CardBody>
    </Card>
  );
};

export default Page;
