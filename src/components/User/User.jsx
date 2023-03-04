import React from 'react'
import { Dropdown } from "flowbite-react"
import { Avatar } from "flowbite-react"
const User = () => {
  return (
    <>
      <Dropdown 
      arrowIcon={false}
      inline={true}
      label={<Avatar rounded={true} size="xs"/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          User Name
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
  </Dropdown>
    </>
  )
}

export default User