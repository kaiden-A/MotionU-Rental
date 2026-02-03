const uploadToCloudinary = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "rental_unsigned"); // your preset
  data.append("folder", "rental");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dsjsrazav/image/upload",
    {
      method: "POST",
      body: data
    }
  );

  if (!res.ok) {
    throw new Error("Cloudinary upload failed");
  }

  return await res.json();
};

export default uploadToCloudinary;
