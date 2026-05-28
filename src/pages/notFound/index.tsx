import { Link } from "react-router-dom";
import UIBowlNav from "@/components/common/UIBowlNav";
import { ROUTES } from "@/constants/endpoint";

const NotFound = () => (
  <div className="uibowl-root min-h-screen bg-bg-base">
    <UIBowlNav />
    <section className="mx-auto max-w-screen-md px-6 py-24 text-center">
      <h1 className="t-display text-accent-indigo">404</h1>
      <p className="t-h1 mt-6 text-text-primary">페이지를 찾을 수 없어요.</p>
      <p className="t-body mt-4 text-text-secondary">
        주소가 잘못되었거나 페이지가 이동했을 수 있습니다.
      </p>
      <Link
        to={ROUTES.APP_ROOT}
        className="uibowl-btn-primary mt-8 no-underline"
        style={{ padding: "12px 20px", fontSize: 13 }}
      >
        홈으로 돌아가기
      </Link>
    </section>
  </div>
);

export default NotFound;
