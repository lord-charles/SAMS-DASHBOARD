import connectToDatabase from "@/app/lib/mongoose";
import SchoolData from "@/app/lib/mongoose-models/SchoolData";

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

async function generateAndStoreStudentData() {
  try {
    const studentDataList = [];
    for (let i = 0; i < 1; i++) {
      const studentData = {
        CTEFReceivedAtSA: null,
        CTEFSerialNumber: "",
        CTPaid: 0,
        accountabilityCTEFReceived: null,
        accountabilityCTEFSerialNumber: "",
        age: 15,
        attendance: "",
        class: "Level2",
        code: "CPH",
        correctionReason: "",
        county10: "Yambio",
        county28: "Yambio",
        dateApproved: null,
        dateCTPaid: null,
        dateCollectedAtSchool: null,
        dateCorrectedOnSSSAMS: null,
        dateValidatedAtSchool: null,
        disabilities: [],
        dob: new Date("2008-12-28"),
        education: "ALP",
        eligible: 0,
        firstName: "Danadu",
        form: 2,
        formstream: 0,
        gender: "M",
        houseHold: [],
        isAlpProgram: [],
        isDisbursed: false,
        isDroppedOut: false,
        isPending: false,
        isPromoted: true,
        lastName: "Miidi",
        learnerUniqueID: 230586503,
        middleName: "Daniel",
        over18: "0",
        payam10: "Bangasu",
        payam28: "Bangasu",
        pregnantOrNursing: { pregnant: false, nursing: false, moredetails: "" },
        reference: "23CPH14",
        school: "Makpandu ALP Centre",
        signatureOnPaymentList: 0,
        state10: "WES",
        state28: "WES",
        stateName10: "WES",
        stateName28: "WES",
        uniqueReceived: 0,
        uniqueReceivedNewSchools: 0,
        uniqueReceivedP5Girls: 0,
        year: 2024,
      };
      studentDataList.push(studentData);
    }
    // Store the generated data to the database
    await SchoolData.create(studentDataList);
    console.log("Student data generated and stored successfully.");
  } catch (error) {
    console.error("Error generating and storing student data:", error);
  }
}
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const origin = request.headers.get("origin");
  const page = parseInt(searchParams.get("page"), 10) || 1;
  const pageSize = 10;
  const state = searchParams.get("state");
  const county = searchParams.get("county");
  const payam = searchParams.get("payam");
  const school = searchParams.get("school");

  const skip = (page - 1) * pageSize;
  let query = {};
  let field = "state10";
  try {
    const db = await connectToDatabase();
    // await generateAndStoreStudentData();
    if (school && school !== "null") {
      query = {
        school: school,
      };
      field = "school";
    } else if (payam && payam !== "null") {
      query = {
        payam28: payam,
      };
      field = "payam10";
    } else if (county && county !== "null") {
      query = {
        county28: county,
      };
      field = "county28";
    } else if (state && state !== "null") {
      query = {
        state10: state,
      };
      field = "state10";
    }
    let isQueryEmpty = Object.keys(query).length === 0;

    const data = await SchoolData.aggregate([
      {
        $match: query,
      },
      {
        $group: {
          _id: isQueryEmpty ? null : `$${field}`,
          totalCount: { $sum: 1 },
          isDroppedOut: {
            $sum: { $cond: [{ $eq: ["$isDroppedOut", true] }, 1, 0] },
          },
          isPromoted: {
            $sum: { $cond: [{ $eq: ["$isPromoted", true] }, 1, 0] },
          },
          isDisabled: {
            $sum: {
              $cond: {
                if: {
                  $or: [
                    {
                      $gt: [
                        {
                          $arrayElemAt: [
                            "$disabilities.disabilities.difficultySeeing",
                            0,
                          ],
                        },
                        1,
                      ],
                    },
                    {
                      $gt: [
                        {
                          $arrayElemAt: [
                            "$disabilities.disabilities.difficultyHearing",
                            0,
                          ],
                        },
                        1,
                      ],
                    },
                    {
                      $gt: [
                        {
                          $arrayElemAt: [
                            "$disabilities.disabilities.difficultyTalking",
                            0,
                          ],
                        },
                        1,
                      ],
                    },
                    {
                      $gt: [
                        {
                          $arrayElemAt: [
                            "$disabilities.disabilities.difficultySelfCare",
                            0,
                          ],
                        },
                        1,
                      ],
                    },
                    {
                      $gt: [
                        {
                          $arrayElemAt: [
                            "$disabilities.disabilities.difficultyWalking",
                            0,
                          ],
                        },
                        1,
                      ],
                    },
                    {
                      $gt: [
                        {
                          $arrayElemAt: [
                            "$disabilities.disabilities.difficultyRecalling",
                            0,
                          ],
                        },
                        1,
                      ],
                    },
                  ],
                },
                then: 1,
                else: 0,
              },
            },
          },
          newStudents: {
            $sum: {
              $cond: [
                {
                  $gte: ["$createdAt", { $subtract: [new Date(), 604800000] }],
                },
                1,
                0,
              ],
            },
          },
        },
      },
    ]);

    return new Response(JSON.stringify(data[0] ?? {}), {
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
