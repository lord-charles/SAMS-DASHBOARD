import { redis } from "@/app/lib/redis";
import { Repository, Schema } from "redis-om";

export const schoolTrackerSchema = new Schema('schoolTracker', {
    year: { type: 'number' },
    state: { type: 'string' },
    name: { type: 'text' },
    county: { type: 'text' },
    payam: { type: 'text' },
    school: { type: 'text' },
    code: { type: 'text' },
    education: { type: 'string' },
    eligible: { type: 'string' },
    validatedAtSchool: { type: 'date' },
    noValidatedAtSchool: { type: 'string' },
    ctefReceivedBySA: { type: 'number' },
    ctefSerialNumber: { type: 'string' },
    dateCorrectedSSSAMS: { type: 'date' },
    noDateCorrectedSSSAMS: { type: 'string' },
    dateApproved: { type: 'date' },
    noDateApproved: { type: 'string' },
    signatureOnPaymentList: { type: 'number' },
    dateCollectedAtSchool: { type: 'date' },
    noDateCollectedAtSchool: { type: 'string' },
    accountabilityCtefReceived: { type: 'date' },
    accountabilityCtefSerialNumber: { type: 'string' },
    ctPaid: { type: 'number' },
    dateCtPaid: { type: 'string' },
    noDateCtPaid: { type: 'string' },
    uniqueReceivedP5Girls: { type: 'number' },
    uniqueReceivedNewSchools: { type: 'number' },
    uniqueReceived: { type: 'number' },
  });

  const schoolTrackerRepository = new Repository(schoolTrackerSchema, redis);
  try {
    await schoolTrackerRepository.createIndex();
  } catch (error) {
    console.log(error);
  }

  export default schoolTrackerRepository;


  