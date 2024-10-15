import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import store from "@/redux/store";

const CompaniesTable = () => {

  const {companies} = useSelector(store => store.company);
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            companies.length <= 0 ? <span>You haven't registered any company yet</span> : (
              <>
              {
                companies?.map((company) => {
                  return (
                    <div key={company._id}>
                    <TableCell>
            <Avatar>
              <AvatarImage src={company.logo} />
            </Avatar>
          </TableCell>
          <TableCell className="text-center">
            {company.name}
          </TableCell>
          <TableCell className="text-center">{company.createdAt.split("T")[0]}</TableCell>
          <TableCell className="text-right cursor-pointer">
                <Popover>
                    <PopoverTrigger>
                        <MoreHorizontal/>   
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                        <div className="flex items-center gap-2 w-fit cursor-pointer">
                            <Edit2 className="w-4"/>
                            <span>Edit</span>
                        </div>
                    </PopoverContent>
                </Popover>
          </TableCell>
          </div>
                  )
                })
              }
              </>
            )
          }
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
