

const appsPromise = async function(){
       const res = await fetch('http://localhost:3000/data.json')
        const data = await res.json()
        return data;
  }

const AppDetailsPage = async ({params}) => {
      const apps = await appsPromise();
      console.log(apps, "apps");
    const {id} = await params;

    const app = apps.find((app) => app.id == Number(id));
    console.log(app , "apps");
    return (
        <div>
            
        </div>
    );
};

export default AppDetailsPage;