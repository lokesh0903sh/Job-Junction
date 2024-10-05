import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>A list of Your Applied Jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    [1,2,3].map((item, index)=>(
                        <TableRow key={index}>
                            <TableCell>17-09-2024</TableCell>
                            <TableCell>Frontened</TableCell>
                            <TableCell>Google</TableCell>
                            <TableCell className="text-right"><Badge>Pending</Badge>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable