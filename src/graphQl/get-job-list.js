
import { gql } from "@apollo/client";

export const JOB_LIST = gql`query Jobs($input: JobsInput) {   
    jobs(input: $input) {
    id    
    title  
    company {
      id
      name 
    }
    cities {
      id 
      name 
      country {
        name
      }
    }
    countries {
      name
    }
    remotes {
      name
    }
    }}`;
