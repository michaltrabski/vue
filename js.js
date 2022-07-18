const set = (key, value) => {
  if (key && typeof key === "string") {
    sessionStorage.setItem(key, value);
    console.log("SET", key, value);
  } else {
    console.log("NOT set, because key ===", key, value);
  }
};

const get = (key) => sessionStorage.getItem(key) || null;

const save = (uid, key, value) => {
  if (uid) {
    set(key, value);
    console.log("SAVED", uid, key, value);
  } else {
    console.log("NOT SAVED, because uid ===", uid, key, value);
  }
};
