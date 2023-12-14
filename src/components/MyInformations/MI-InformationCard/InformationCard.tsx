import BtnModifyInfo from '../MI-Boutons/BtnModifyInfo/BtnModifyInfo';
import { Button, Card } from 'flowbite-react';
import BtnDeleteInfo from '../MI-Boutons/BtnDeleteInfo/BtnDeleteInfo';

const InformationCard = (props: any) => {
  const { id, refreshData } = props
  // console.log("🚀 ~ file: InformationCard.tsx:7 ~ InformationCard ~ id:", id)

  const handleRefreshData = () => { refreshData() }

  const renderValue = () => {
    // Vérifier si le type est une URL
    if (id.type === 'url') {
      return (
        <a href={id.value} target="_blank" rel="noopener noreferrer">
          {id.value}
        </a>
      );
    } else {
      return <h4 className="scroll-m-20 text-l font-semibold tracking-tight">{id.value}</h4>;
    }
  };

  return (
    <Card key={id._id} className='informationCard'>

      <h5 className="scroll-m-20 text-xl font-semibold tracking-tight ">{id.name}</h5>
      {renderValue()}
      {/* <h4 className="scroll-m-20 text-l font-semibold tracking-tight ">{id.value}</h4> */}

      <Button.Group className='flex justify-center gap-2'>
        <>
          <BtnModifyInfo
            id={id}
            name={id.name}
            value={id.value}
            onClick={handleRefreshData}
          />
          <BtnDeleteInfo
            id={id}
            onClick={handleRefreshData} />
        </>
      </Button.Group>

    </Card>
  )
}

export default InformationCard