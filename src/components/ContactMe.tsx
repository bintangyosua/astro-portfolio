import { Box, Flex, TextArea, TextField, Text, Button } from "@radix-ui/themes";
import { useEffect, useState, type FormEvent } from "react";
import isEmail from "validator/lib/isEmail";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const textLength = name.length && email.length && message.length;

  const [validEmail, setValidEmail] = useState(false);

  useEffect(() => {
    isEmail(email) ? setValidEmail(true) : setValidEmail(false);
  }, [email]);

  return (
    <form method="POST" name="submit-to-google-sheet">
      <Flex
        direction="column"
        gap="3"
        align={"start"}
        maxWidth={"500px"}
        className="">
        <Box width={"100%"}>
          <label>
            <Text as="div" size="3" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root
              size="3"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
        </Box>
        <Box width={"100%"}>
          <label>
            <Text as="div" size="3" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root
              size="3"
              type="email"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {email === "" ? (
              <></>
            ) : (
              !validEmail && (
                <div className="mt-1 text-sm text-red-500">
                  Your email is not a valid email.
                </div>
              )
            )}
          </label>
        </Box>
        <Box width="100%">
          <label>
            <Text as="div" size="3" mb="1" weight="bold">
              Message
            </Text>
            <TextArea
              size={"3"}
              placeholder="Your message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </label>
        </Box>
        <Box width={"100%"} className="flex justify-end">
          <Button
            disabled={textLength > 0 && validEmail ? false : true}
            size="3"
            variant="soft"
            color="gray"
            onClick={async (e) => {
              event?.preventDefault();
              const url =
                "https://api.sheety.co/4780c2ceb0548b951079d8124204783f/contactMe/sheet1";

              const date = new Date();
              date.setDate(date.getHours() + 7);

              if (validEmail) {
                try {
                  const res = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify({
                      sheet1: { name, email, message, timestamp: date },
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });

                  const data = await res.json();

                  if (data) {
                    location.reload();
                  }
                } catch (error) {
                  console.error(error);
                }
              }
            }}>
            Send Message
          </Button>
        </Box>
      </Flex>
    </form>
  );
}
