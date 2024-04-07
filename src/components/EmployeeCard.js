import "./EmployeeCard.css";
import { ReactComponent as TestSvg } from "../icons/toast-upvote-icon.svg";
import React from "react";

function EmployeeCard() {
  return (
    <div className="employee-card-container flex flex-row justify-between gap-12">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="w-[220px]">
            <img
              className="rounded-full"
              alt="Tailwind CSS Navbar component"
              src="https://s3-alpha-sig.figma.com/img/6248/5cff/a7923e47e9f360d46d1efcac81a0302a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XGHxkiE09lyiYMzfbjhCJvOHcDChQEYnGJVcv7XVWm5GhoHoU4AqTquijMFxBSuKcUbkiwtDjdipa4iLUY6788j6b9AMJyhxbieVROyEFmtUzgKQf8Lf60v6ALw2HDK1HGvLC8E~OEt157MttIDgH9RYOgVp819diiyKO3RATBloFvIiI5BEKG2~cuRihjXkFoylhCMjNdrA24QdSfo17EOVqhiHY9az4hQbPrM0QYT4jJpqlip~bU1~apbNyOVtxNy552BXc05INOIEud5PtTlpr2AWtBwNN3hJtuMA1pX7z71wI~V8eZVijuLWQzBknt-CBVuSZDQqqspMlqo8sw__"
            />
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title toast-font">Mary Poppins</h2>
          <div className="card-actions"></div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="w-[220px]">
            <img
              className="rounded-full"
              alt="Tailwind CSS Navbar component"
              src="https://s3-alpha-sig.figma.com/img/7e7f/4200/da8a62c550e115896318d3d3e44a0a02?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0ve6asbDmqMgLK8TnsQkRaa0jObiphBDwxyOMjOTmwQn7eoI4BH8Eas2E7ESXQ26PU~sqb5Nxc8p789pZlWC6k6b6ua0E6zZmkgA18wRpUgZw0P5tEKlSPnxWKMV1fRMKKvQ6wYU-YBazMZYEx2iPDXLplHfq25G6PwHWI7DfN9lbyZDplRJRbiBe8VY8LVM6p0VBd~bHD6jNOx~a8eqLgtkWNTwKPp8KSEWM4tWk6ZJhNo-oaqyiDN-eT984EIVLyjNEtMcUI9htQxzTuXAaUWITVfWQw6ZeE-epUIYeaRBjbatPbM4NdDmXoDwhuUfTMXK4ejLCv3EyxN8p5aLA__"
            />
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title toast-font">Brian Miller</h2>
          <div className="card-actions"></div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
