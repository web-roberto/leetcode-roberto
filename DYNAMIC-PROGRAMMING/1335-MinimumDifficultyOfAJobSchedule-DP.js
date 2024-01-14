class Solution {
  minDifficulty(jobDifficulty, d) {
      const n = jobDifficulty.length;
      
      if (n < d) {
          return -1;
      }
      const hardest_job_remaining = new Array(n).fill(0);
      let hardest_job = 0;
      for (let i = n - 1; i >= 0; i--) {
          hardest_job = Math.max(hardest_job, jobDifficulty[i]);
          hardest_job_remaining[i] = hardest_job;
      }
      function dp(i, day) {
          if (day === d) {
              return hardest_job_remaining[i];
          }
          let best = Infinity;
          let hardest = 0;
          
          for (let j = i; j <= n - (d - day); j++) {
              hardest = Math.max(hardest, jobDifficulty[j]);
              best = Math.min(best, hardest + dp(j + 1, day + 1));
          }
          return best;
      }
      return dp(0, 1);
  }
}


