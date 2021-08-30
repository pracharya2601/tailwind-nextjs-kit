import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '@/components/elements/Button'
import Avatar from '@/components/elements/Avatar'
import Alert from '@/components/elements/Alert'
import React from 'react'
import ActivityCard from '@/components/kit/ActivityCard'
import Menu, { MenuItem } from '@/components/elements/Menu'
import Input from '@/components/elements/Input'
import TextArea from '@/components/elements/TextArea'
import Form from '@/components/elements/Form'


const inputType = {
  name: "text",
  email: "email",
  password: 'password',
  age: 'number',
  message: 'text',
  class: 'text'
}

const Home: NextPage = () => {
  const [stat, setState] = React.useState(true)
  const [data, setData] = React.useState({
    email: '',
    name: '',
    password: '',
    age: 18,
    message: "",
    list: [
      { id: 1, name: '', classItem: '' }
    ]

  })
  const onSubmitHandle = () => {
    console.log(data)
  }
  return (
    <div className="dark bg-white pb-20">
      < Head >
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head >

      <main className="bg-red-100 p-2 dark:bg-gray-900">
        <div className="w-full flex">
          <Avatar goto="?name=prakash" withBorder withInfo size="normal" />
        </div>

        <Button label="hello" customClass="uppercase" color="pink" variant="outlined" onClick={() => setState(!stat)} />
        {stat && <Alert title="Hello alert" text="This is description" type="danger" onclickremove />}

        <ActivityCard />
        <Menu
          label="hello"
          dropSide="right"
          withBackground
          withDivider
          items={
            [
              { label: 'Label', link: "/hello", desc: 'THis is descriptionhome page uploaded 3 documents on concept deisgn home page home page uploaded 3 documents on concept deisgn home page ' },
              { label: 'Label 2', link: "/hello", desc: 'THis is descriptionhome page uploaded 3 documents on concept deisgn home page home page uploaded 3 documents on concept deisgn home page ' }
            ]
          }
        >
          <MenuItem
            label="label"
            onClick={() => console.log("lsjflkdjsl")}
            desc="This is disc"
          />
          <MenuItem
            label="label"
            onClick={() => alert("lsjflkdjsl")}
            desc="This is disc"
          />
        </Menu>
        <Menu
          label={<Button label="Dropdown" color="white" icon={
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
            </svg>
          }
          />}
          hideIcon
          dropSide="right"
          withDivider
          items={
            [
              { label: 'Label', link: "/?name=Persdjsdkjl", desc: 'THis is descriptionhome page uploaded 3 documents on concept deisgn home page home page uploaded 3 documents on concept deisgn home page ' },
              { label: 'Label 2', link: "/hello", desc: 'THis is descriptionhome page uploaded 3 documents on concept deisgn home page home page uploaded 3 documents on concept deisgn home page ' }
            ]
          }
        />
        <Form customClass="p-3 w-80 sm:w-96 border-2 border-red-500 rounded m-auto" onSubmit={onSubmitHandle}>
          <Input
            label="Email"
            type="time"
            name="email"
            placeholder="Email"
            withForceIndications

            indicationLevel={4}
            // indicatorColor="red"
            indicationLabel="Password Strong"
            error=""
            required
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
          <TextArea
            id="message"
            name="message"
            placeholder="Enter your message"
            label="Message"
            required
          />
          <Button customClass="w-full" label="Submit" color="green" type="submit" />
        </Form>
        <Form customClass="p-3 w-80 sm:w-96 border-2 border-red-500 rounded m-auto" onSubmit={onSubmitHandle}>
          {Object.keys(data).map((key, index) => {

            if (key === "list") {
              return (
                <div>
                  {data[key].map(({ id, name, classItem }, i) => (
                    <Input
                      key={id}
                      label={`List- ${id}`}
                      type={inputType[name]}
                      name={name}
                      placeholder={`Enter value of List- ${id}`}
                      error=""
                      required
                      square
                      onClear={() => alert("hello")}
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      }
                    />
                  ))}
                  <Button
                    label="Add"
                    type="button"
                    size="sm"
                    rounded
                    customClass="mx-auto mt-1"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                    }
                  />
                </div>
              )
            }
            const label = inputType[key];
            const placeholder = inputType[key];
            const type = inputType[key];
            const name = inputType[key];
            return (
              <Input
                key={key}
                label={label}
                type={type}
                name={name}
                placeholder={placeholder}
                withForceIndications={type === "password" ? true : false}
                autoComplete={type === "password" ? "new-password" : ""}
                indicationLevel={6}
                indicatorColor="red"
                indicationLabel="Empty"
                error=""
                required
              />
            )
          })}
        </Form>
        <div className="flex flex-wrap p-2 justify-left">
          <Button label="Dropdown" color="red"
            size="xs"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            }
          />
          <Button label="Dropdown" color="red"
            size="sm"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            }
          />
          <Button label="Dropdown" color="red"
            size="md"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            }
          />
          <Button label="Dropdown" color="red"
            size="lg"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            }
          />
          <Button label="Dropdown" color="red"
            size="xl"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            }
          />
        </div>
        <div className="flex flex-wrap p-2 justify-left">
          <Button color="red"
            size="xs"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            }
          />
          <Button color="red"
            size="sm"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            }
          />
          <Button color="red"
            size="md"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            }
          />
          <Button color="red"
            size="lg"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            }
          />
          <Button color="red"
            size="xl"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            }
          />
        </div>
        <div className="flex flex-wrap p-2 justify-left">
          <Button color="red"
            variant="outlined"
            size="xs"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            }
          />
          <Button color="red"
            variant="outlined"
            size="sm"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            }
          />
          <Button color="red"
            variant="outlined"
            size="md"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            }
          />
          <Button color="red"
            variant="outlined"
            size="lg"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            }
          />
          <Button color="red"
            variant="outlined"
            size="xl"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            }
          />
        </div>
        <div className="flex flex-wrap p-2 justify-left">
          <Button color="red"
            rounded
            size="xs"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            }
          />
          <Button color="red"
            rounded
            size="sm"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            }
          />
          <Button color="red"
            rounded
            size="md"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            }
          />
          <Button color="red"
            rounded
            size="lg"
            icon={
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            }
          />
          <Button color="red"
            rounded
            size="xl"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            }
          />
        </div>
        <div className="flex flex-wrap p-2 justify-left">
          <Button label="Dropdown" color="red"
            size="xs"
          />
          <Button label="Dropdown" color="red"
            size="sm"
          />
          <Button label="Dropdown" color="red"
            size="md"
          />
          <Button label="Dropdown" color="red"
            size="lg"
          />
          <Button label="Dropdown" color="red"
            size="xl"
          />
        </div>
        <div className="flex flex-wrap p-2 justify-left">
          <Button label="Dropdown" color="red"
            size="xs"
            variant="outlined"
          />
          <Button label="Dropdown" color="red"
            size="sm"
            variant="outlined"
          />
          <Button label="Dropdown" color="red"
            size="md"
            variant="outlined"
          />
          <Button label="Dropdown" color="red"
            size="lg"
            variant="outlined"
          />
          <Button label="Dropdown" color="red"
            size="xl"
            variant="outlined"
          />
        </div>
        <div className="flex flex-wrap p-2 justify-left">
          <Button label="Dropdown" color="red"
            size="xs"
            rounded
          />
          <Button label="Dropdown" color="red"
            size="sm"
            rounded
          />
          <Button label="Dropdown" color="red"
            size="md"
            rounded
          />
          <Button label="Dropdown" color="red"
            size="lg"
            rounded
          />
          <Button label="Dropdown" color="red"
            size="xl"
            rounded
          />
        </div>
        <div className="flex flex-wrap p-2 justify-left">
          <Button label="Dropdown" color="red"
            size="xs"
            rounded
            variant="outlined"
          />
          <Button label="Dropdown" color="red"
            size="sm"
            rounded
            variant="outlined"
          />
          <Button label="Dropdown" color="red"
            size="md"
            rounded
            variant="outlined"
          />
          <Button label="Dropdown" color="red"
            size="lg"
            rounded
            variant="outlined"
          />
          <Button label="Dropdown" color="red"
            size="xl"
            rounded
            variant="outlined"
          />
        </div>
      </main>
    </div >
  )
}

export default Home
