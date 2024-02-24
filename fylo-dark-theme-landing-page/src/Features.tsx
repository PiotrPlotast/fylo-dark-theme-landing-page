import accessAnywhere from "./assets/images/icon-access-anywhere.svg";
import security from "./assets/images/icon-security.svg";
import realTimeCollaboration from "./assets/images/icon-collaboration.svg";
import anyFile from "./assets/images/icon-any-file.svg";

export default function Features() {
  return (
    <section>
      <ul>
        <li>
          <div className="flex flex-col items-center">
            <img src={accessAnywhere} alt="" />
            <h2 className="text-textColor text-lg font-bold">
              Access your files, anywhere
            </h2>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center">
            <img src={security} alt="" />
            <h2 className="text-textColor text-lg font-bold">
              Security you can trust
            </h2>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center">
            <img src={realTimeCollaboration} alt="" />
            <h2 className="text-textColor text-lg font-bold">
              Real-time collaboration
            </h2>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center">
            <img src={anyFile} alt="" />
            <h2 className="text-textColor text-lg font-bold">
              Store any type of file
            </h2>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
