"use client";

import { IoSearch } from "react-icons/io5";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }

        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="relative flex flex-1 items-center">
            <input
                type="text"
                placeholder="Cari client atau layanan"
                defaultValue={searchParams.get("query")?.toString()}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm"
            />

            <IoSearch className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
        </div>
    );
};

export default Search;