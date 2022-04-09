const base = "http://localhost:5000";

export const register_applicant = async (obj) => {
    const res = await fetch(`${base}/api/applicant/signup`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const ans = await res.json();
    return ans;
}

export const login_applicant = async (obj) => {
    const res = await fetch(`${base}/api/applicant/login`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const ans = await res.json();
    return ans;
}

export const apply_application = async (obj) => {
    const res = await fetch(`${base}/api/applicant/application`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const ans = await res.json();
    return ans;
}

export const delete_application = async (obj) => {
    const res = await fetch(`${base}/api/applicant/application`, {
        method: "DELETE",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const ans = await res.json();
    return ans;
}
