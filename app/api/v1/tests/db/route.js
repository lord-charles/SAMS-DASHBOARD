import { Enrolment } from "@/models/tblenrolment";
import { SchoolForm } from "@/models/tblform";
import { School } from "@/models/tblschool";
import { Student } from "@/models/tblstudent";
import { County } from "@/models/tcounties";
import { Payam } from "@/models/tpayam";
import { State } from "@/models/tstates";
import { Sequelize } from "sequelize";

export async function OPTIONS(request) {
  const origin = request.headers.get("origin");
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
export async function GET(request) {
  const origin = request.headers.get("origin");
  const year = 2018;

  try {
    const message = "Query has been run successfully.";
    const result = await Enrolment.findAndCountAll({
      attributes: [
        [Sequelize.literal("''"), "idx"],
        // ["year", `${year}`],

        [Sequelize.col("tblform.fYear"), "form"],
        // School
        [Sequelize.col("tblform.tblschool.sName"), "schoolName"],
        [Sequelize.col("tblform.tblschool.sRef"), "schoolCode"],
        // Payam
        [Sequelize.col("tblform.tblschool.tpayam.pyName"), "payamName"],
        // County
        [Sequelize.col("tblform.tblschool.tpayam.tcounty.cName"), "countyName"],
        // State
        [
          Sequelize.col("tblform.tblschool.tpayam.tcounty.tstate.sState"),
          "stateName",
        ],

        [Sequelize.col("tblstudent.stGender"), "gender"],
        [Sequelize.col("tblstudent.stDOB"), "dob"],
        // [
        //   Sequelize.literal(
        //     "TIMESTAMPDIFF(YEAR, tblstudent.stDOB, '$refdate') AS age"
        //   ),
        //   'age'
        // ],
        [Sequelize.col("tblstudent.stFName"), "firstName"],
        [Sequelize.col("tblstudent.stMNames"), "middleName"],
        [Sequelize.col("tblstudent.stLName"), "lastName"],
        [Sequelize.col("tblstudent.stASID"), "reference"],
        [Sequelize.col("tblenrolment.idEnrolment"), "idEnrolment"],
        // [
        //   Sequelize.literal(
        //     "IF(TIMESTAMPDIFF(YEAR, tblstudent.stDOB, '$refdate')>=18,'Y','N')"
        //   ),
        //   'over18'
        // ],
      ],
      include: [
        {
          model: Student,
          attributes: [], // Include only necessary attributes
          where: {
            stGender: "F",
            stVer: "0",
          },
        },
        {
          model: SchoolForm,
          attributes: [],
          where: {
            fVer: "0",
          },
          required: true,
          include: [
            {
              model: School,
              attributes: [],
              required: true,
              where: {
                sVer: "0",
              },
              include: [
                {
                  model: Payam,
                  attributes: [],
                  required: true,
                  include: [
                    {
                      model: County,
                      attributes: [],
                      required: true,
                      include: [
                        {
                          model: State,
                          attributes: [],
                          required: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      where: {
        "$tblenrolment.eTo$": null,
        [Sequelize.col("tblstudent.stFName")]: {
          [Sequelize.Op.ne]: "unknown",
        },
        [Sequelize.col("tblstudent.stLName")]: {
          [Sequelize.Op.ne]: "student",
        },
        [Sequelize.literal(
          '((tblform.fYear >= 6 AND UPPER(tblschool.sSchType)<>"SEC") OR (tblform.fYear <= 4 AND UPPER(tblschool.sSchType)="SEC"))'
        )]: Sequelize.literal(""),
      },
      // order: [
      //   [Sequelize.col("tstates.sAbbrv"), "ASC"],
      //   [Sequelize.col("tcounties.cName"), "ASC"],
      //   [Sequelize.col("tpayam.pyName"), "ASC"],
      //   [Sequelize.col("tblschool.sName"), "ASC"],
      //   [Sequelize.col("tblform.fYear"), "ASC"],
      //   [Sequelize.col("tblstudent.stLName"), "ASC"],
      // ],
      offset: 0, // Start from the first page
      limit: 10, // Number of records per page
    });

    // const { rows, count } = await Student.findAndCountAll({
    //   offset: 0,
    //   limit: 10,
    // });

    return new Response(JSON.stringify(result), {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
