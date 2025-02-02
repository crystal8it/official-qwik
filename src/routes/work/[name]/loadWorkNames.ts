import WorkTranscript from "~/Transcript/work-id";

const loadWorkNames = async () => {
  return Object.keys(WorkTranscript);
};

export default loadWorkNames;
