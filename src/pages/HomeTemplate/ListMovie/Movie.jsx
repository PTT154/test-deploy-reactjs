import { Link } from "react-router-dom"

export default function Movie(props) {
    const { data } = props;

    return (


        <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
            <a href="#">
                <img className="rounded-t-base" src={data.hinhAnh} alt={data.tenPhim} />
            </a>
            <div className="p-6 text-center">
                <a href="#">
                    <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">{data.tenPhim}</h5>
                </a>
            </div>

            <Link to={`/detail-movie/${data.maPhim}`} className="bg-blue-500 text-white px-4 py-2 rouded">
                View Details
            </Link>
        </div>
    )
}
