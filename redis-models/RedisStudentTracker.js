import { redis } from "@/app/lib/redis";
import { Repository, Schema } from "redis-om";

export const studentTrackerSchema = new Schema('studentTracker', {
    year: { type: 'number' },
    form: { type: 'number' },
    name: { type: 'text' },
    county: { type: 'text' },
    payam: { type: 'text' },
    over18: { type: 'string' },
    school: { type: 'text' },
    firstName: { type: 'text' },
    lastName: { type: 'text' },
    code: { type: 'text' },
    education: { type: 'text' },
    formstream: { type: 'number' },
    age: { type: 'number' },
    dob: { type: 'date' },
    learnerUniqueID: { type: 'number' },
    validatedAtSchool: { type: 'date' },
    ctefReceivedAtSA: { type: 'date' },
    dateCorrectedOnSSSAMS: { type: 'date' },
    dateApproved: { type: 'date' },
    signatureOnPaymentList: { type: 'number' },
    dateCollectedAtSchool: { type: 'date' },
    dateValidatedAtSchool: { type: 'date' },
    accountabilityCtefReceived: { type: 'date' },
    accountabilityCtefSerialNumber: { type: 'string' },
    ctPaid: { type: 'number' },
    uniqueReceivedP5Girls: { type: 'number' },
    uniqueReceivedNewSchools: { type: 'number' },
    uniqueReceived: { type: 'number' },
  });

  const studentTrackerRepository = new Repository(studentTrackerSchema, redis);
  try {
    await studentTrackerRepository.createIndex();
  } catch (error) {
    console.log(error);
  }

  export default studentTrackerRepository;


  