export async function handler(event, context) {
  try {
    //   do stuff
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          message: `hello`,
        },
      }),
    }
  } catch (error) {
    console.log(error)

    return {
      statusCode: 500,
      body: JSON.stringify({
        data: {
          error: `ERROR`,
        },
      }),
    }
  }
}
