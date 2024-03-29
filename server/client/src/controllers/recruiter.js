// const base = "http://localhost:5000";

export const auth_recruiter = async (obj) => {
  const res = await fetch(`/api/recruiter/auth`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};

export const register_recruiter = async (obj) => {
  const res = await fetch(`/api/recruiter/signup`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};

export const login_recruiter = async (obj) => {
  const res = await fetch(`/api/recruiter/login`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};

export const create_jobpost = async (obj) => {
  const res = await fetch(`/api/recruiter/jobpost`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
      "Authorization":localStorage.getItem("recruiter_token")
    },
  });
  const ans = await res.json();
  return ans;
};

export const get_jobposts = async (obj) => {
  const res = await fetch(`/api/recruiter/getjobsposted`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
      "Authorization":localStorage.getItem("recruiter_token")
    },
  });
  const ans = await res.json();
  return ans;
};

export const get_all_jobposts = async () => {
  const res = await fetch(`/api/recruiter/alljobposts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};

export const edit_jobpost = async (obj) => {
  const res = await fetch(`/api/recruiter/jobpost`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
      "Authorization":localStorage.getItem("recruiter_token")
    },
  });
  const ans = await res.json();
  return ans;
};

export const delete_jobpost = async (obj) => {
  const res = await fetch(`/api/recruiter/jobpost`, {
    method: "DELETE",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
      "Authorization":localStorage.getItem("recruiter_token")
    },
  });
  const ans = await res.json();
  return ans;
};

export const get_jobpost_applications = async (obj) => {
  const res = await fetch(`/api/applicant/jobpost/applications`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
      "Authorization":localStorage.getItem("recruiter_token")
    },
  });
  const ans = await res.json();
  return ans;
};

export const get_recruiter_details_by_id = async (obj) => {
  const res = await fetch(`/api/recruiter/recruiterdets`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
      "Authorization":localStorage.getItem("recruiter_token")
    },
  });
  const ans = await res.json();
  return ans;
};
