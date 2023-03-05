import React from 'react'
import { Tabs } from "flowbite-react"



///tabs under product in [Productslug.js]

const DescriptionTab = () => {
  return (
    <>
    <Tabs.Group
  aria-label="Tabs with icons"
  style="underline"
>
  <Tabs.Item
    title="Profile"
    // icon={HiUserCircle}
  >
    Profile content
  </Tabs.Item>
  <Tabs.Item
    active={true}
    title="Dashboard"
    // icon={MdDashboard}
  >
    Dashboard content
  </Tabs.Item>
  <Tabs.Item
    title="Settings"
    // icon={HiAdjustments}
  >
    Settings content
  </Tabs.Item>
  <Tabs.Item
    title="Contacts"
    // icon={HiClipboardList}
  >
    Contacts content
  </Tabs.Item>
  <Tabs.Item
    disabled={true}
    title="Disabled"
  >
    Disabled content
  </Tabs.Item>
</Tabs.Group>

    </>
  )
}

export default DescriptionTab